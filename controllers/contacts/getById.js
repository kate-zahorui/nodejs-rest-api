const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  res.json(contact);
};

module.exports = getById;
