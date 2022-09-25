const { user, User } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((users => res.json(courses))
                .catch((err) => res.status(500).json(err));
    },
//get user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-_v')
            .then(course =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(course)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req,res) {
        User.create(req.body)
        .then((user)=> res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    //delete a user
    deleteUser(req,res){
        User.findOneAndDelete({_id: req.params.courseId})
        .then((course)=>
        !course?res.status(404).json({ message: 'No user with that ID '})
        : Student.deleteMany({_id: { $in: course.students}})
        )
        .then(()=> res.json({ message: 'Course and students deleted!'}))
        .catch((err)=> res.status(500).json(err));

    },

    //update
    updateUser(req, res){
        User.findOneAndUpdate(
            {_id: req.params.courseId },
            {$set: req.body },
            { runValidators: true, new:true }
        )

        .then((course)=>
        !course
        ? res.status(404).json({ message: 'No user with this id! '})
        :res.json(course)
        )
        .catch((err)=> res.status(500).json(err));
    },

}
