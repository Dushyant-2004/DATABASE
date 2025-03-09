const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

main().
then((res) => {
    console.log("Connected to MongoDB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String
});

const User = mongoose.model('User', userSchema);

const User1 = new User({
  name: 'John',
  age: 25,
  email: "jhon@gmail.com",
});
User1.save().then(() => console.log('User1 saved to database'));

const User2 = new User({
  name: 'Alice',
  age: 35,
  email: "alice@gmail.com",
});

User2
.save()
.then(() => console.log('User2 saved to database'))
.catch(err => console.log(err));

