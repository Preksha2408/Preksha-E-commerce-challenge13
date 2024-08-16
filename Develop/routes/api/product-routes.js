const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async(req, res) => {
  // find all products
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          
        },
        {
          model: Tag,
          
        }
      ],
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products: ', error);
    res.status(500).json({error: 'Failed to retrive products'});
  }
  // be sure to include its associated Category and Tag data
});

// get one product
router.get('/:id', async(req, res) => {
  // find a single product by its `id`
  try {
    const products = await Product.findByPk(req.params.id, {
    
       // be sure to include its associated Category and Tag data
      include: [
        {
          model: Category,
          
        },
        {
          model: Tag,
         
        }
      ],
    });

    if (!products) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

// create new product

router.post('/', (req, res) => {
  Product.create(req.body)
    .then((products) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: products.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      res.status(200).json(products);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json({ message: "Creation failed", error: err });
    });
});

// update product
router.put("/:id", async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });

    // Check if req.body.tags exists and has some length
    if (req.body.tags && req.body.tags.length > 0) {
      // Retrieve product tags and their IDs
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Filter new product tags and create new ones
      const newProductTags = req.body.tags
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // Filter product tags to remove and delete them
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    // Respond with updated product
    const product = await Product.findByPk(req.params.id, { include: [{ model: Tag }] });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    // Delete the product with the matching ID
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    // If the product is not found, send a 404 status with a custom message
    // Otherwise, return the deleted data
    !deleted
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Product not deleted!", error: err });
  }
});

module.exports = router;
