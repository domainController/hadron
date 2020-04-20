const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const micronutrients = require('../../Micronutrients');

// Get all micronutrients
router.get('/', (req, res) => res.json(micronutrients));

// Get single micronutrient
router.get('/:description', (req, res) => {
    const found = micronutrients.some(micronutrient => micronutrient.description === req.params.description);
    if (found) {
    res.json(micronutrients.filter(micronutrient => micronutrient.description === req.params.description));
    } else {
        res.status(400).json({ msg:`No Micronutrient with description ${req.params.description} !`});
       }
   });
   
// Create Micronutrient
router.post('/', (req, res) => {
    const newMicronutrient = {
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        servings: req.body.servings,
        monthlyServingsNeed: req.body.monthlyServingsNeed,
        site: req.body.site,
        photo: req.body.photo
    }

if(!newMicronutrient.description || !newMicronutrient.price || !newMicronutrient.quantity || !newMicronutrient.servings ||
    !newMicronutrient.monthlyServingsNeed || !newMicronutrient.site || !newMicronutrient.photo) {
      return res.status(400).json({ msg : 'Please include missing properties values or remove empty ones' });
    }

    micronutrients.push(newMicronutrient);
    res.json(micronutrients);
});
//  Update Micronutrient

router.put('/:description', (req, res) => {
    const found = micronutrients.some(micronutrient => micronutrient.description === req.params.description);
    if (found) {
      const updMicronutrient = req.body; 
        micronutrients.forEach(micronutrient => {
            if(micronutrient.description === req.params.description) {
                micronutrient.price = updMicronutrient.price ? updMicronutrient.price : micronutrient.price ;
                micronutrient.quantity = updMicronutrient.quantity ? updMicronutrient.quantity : micronutrient.quantity ;
                micronutrient.servings = updMicronutrient.servings ? updMicronutrient.servings : micronutrient.servings ;
                micronutrient.monthlyServingsNeed = updMicronutrient.monthlyServingsNeed ? updMicronutrient.monthlyServingsNeed : micronutrient.monthlyServingsNeed ;
                micronutrient.site = updMicronutrient.site ? updMicronutrient.site : micronutrient.site ;
                micronutrient.photo = updMicronutrient.photo ? updMicronutrient.photo : micronutrient.photo;

                res.json({ msg: 'Micronutrient updated', micronutrient});
            }
        });
    } else {
        res.status(400).json({ msg:`No Micronutrient with description ${req.params.description} !`});
       }
   });

   // Delete Micronutriments:
   
router.delete('/:description', (req, res) => {
    const found = micronutrients.some(micronutrient => micronutrient.description === req.params.description);

    if (found) {
    res.json({
        msg: 'Micronutrient deleted',
        micronutrients: micronutrients.filter(micronutrient => micronutrient.description !== req.params.description)
    });
    } else {
        res.status(400).json({ msg:`No Micronutrient with description ${req.params.description}!`});
       }
   });
   

module.exports = router;