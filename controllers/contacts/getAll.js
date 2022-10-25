const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const allContacts = await Contact.find({ owner });
  res.json(allContacts);
};

module.exports = getAll;
