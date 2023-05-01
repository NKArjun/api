import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (req.userId !== user._id.toString())
            return res.status(403).send("You can only delete your account");
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("User deleted.");
    } catch (err) {
        res.status(500).send("Internal Error");
    }
}