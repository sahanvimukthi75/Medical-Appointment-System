import User from "../models/UserShema.js";
import Booking from "../models/BookingShema.js";
import Doctor from "../models/DoctorShema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "sucessfully updated",
      data: updateUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "sucessfully deleted",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "user found",
      data: user,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "no user found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password"); // exclude the password
    res.status(200).json({
      success: true,
      message: "users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "not  found" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });

    const { password, ...rest } = user.doc;
    res
      .status(200)
      .json({
        success: true,
        message: "profile info is getting",
        data: { ...rest },
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong cannot get" });
  }
};
export const getMyAppointments = async (req, res) => {
  try {
    // retrive appointments from booking
    const bookings = await Booking.find({ user: req.userId });

    // exract doctor ids
    const doctorIds = bookings.map((el) => el.doctor.id);

    //retrive doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );
    res
      .status(200)
      .json({
        success: true,
        message: "Appointments are getting",
        data: doctors,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "something went wrong" });
  }
};
