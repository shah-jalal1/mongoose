import User from "./user.model";

export const createUserToDB = async () => {
    const user = await new User({
        id: '2222564',
        roll: 'student',
        password: 'Jhakanaka',
        name: {
            firstName: 'test test',
            middleName: 'shajalal',
            lastName: '.'
        },
        gender: "male",
        email: 'abc@gmail.com', 
        contactNo: '017',
        emergencyContactNo: '0188',
        presentAddress: 'uganda',
        permanentAddress: 'usa'

      });
      await user.save()

      return user;
}