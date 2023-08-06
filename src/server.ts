import mongoose from 'mongoose';
import app from './app';
const port: Number = 5000

// Database connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
    console.log('database connection successful')
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (err) {
    console.log('error found', err)
  }
}

main();



