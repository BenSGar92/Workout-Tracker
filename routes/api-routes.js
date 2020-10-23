// const express = require("express");
 const db = require("../models");
// const app = express();

// app.get("/exercise", (req, res) => {
    // db.Workout.find({})
    //   .then(dbNote => {
    //       console.log(dbNote);
    //     res.json(dbNote);
    //   })
    //   .catch(err => {
    //     res.json(err);
    //   });
    // res.send("working");
//   });
  
//   app.get("/exercise", (req, res) => {
//     db.resistance.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
//   app.get("/stats", (req, res) => {
//     db.cardio.find({})
//       .then(dbNote => {
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err)local;
//     });
// });

// module.exports = app;


const router = require("express").Router();
//const Transaction = require("../models/transaction.js");

// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

///api/workouts/range 

// router.get("/exercise", (req, res) => {
//     db.Workout.find({})
//       .then(dbNote => {
//           console.log(dbNote);
//         res.json(dbNote);
//       })
//       .catch(err => {
//         res.json(err);
//       });
// });

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({day: -1})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//non working route
router.post("/api/workouts", (req, res) => {
    console.log("working?");
    console.log(req.body);
    db.Workout.create(req.body)
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});


//error Workout is not defined
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;
