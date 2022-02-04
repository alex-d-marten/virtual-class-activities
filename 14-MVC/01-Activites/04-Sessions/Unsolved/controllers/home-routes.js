const router = require('express').Router();
const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description']
        }
      ]
    });

    const galleries = dbGalleryData.map(gallery =>
      gallery.get({ plain: true })
    );
    // TODO: Add a comment describing how we pass the session to the view
    // sending over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/gallery/:id', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description'
          ]
        }
      ]
    });

    const gallery = dbGalleryData.get({ plain: true });
    // TODO: Add a comment describing how we pass the session to the gallery view.
    // sending over the 'loggedIn' session variable to the 'gallery' template. The session object is on the request and loggedIn is a property of the session object
    res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    // TODO: Add a comment describing how we pass the session to the painting view.
    // sending over the 'loggedIn' session variable to the 'painting' template. The session object is on the request and loggedIn is a property of the session object
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
