const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['product_id', 'product_name', 'price', 'stock']
        },
      ]
    });
    res.json(tags);
  } catch (error) {
    console.error('Error fetching products: ', error);
    res.status(500).json({error: 'Failed to retrive products'});
  }

  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  try {
    const tags = await Tag.findOne({
      where: {
        id : req.params.id
      },

      include: [
        {
          model: Product,
          attributes: ['product_id', 'product_name', 'price', 'stock']

        },
      ]
    });
    res.json(tags);

  } catch (error) {
    console.error('Error fetching products: ', error);
    res.status(500).json({error: 'Failed to retrive products'});
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag

  Tag.create({
    name: req.body.name,
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err});
    });
});



router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      Tag_id: req.body.Tag_id,
      Tag_name: req.body.Tag_name,
    },
    {
      where: {
        id: req.params.Tag_id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.Tag_id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
