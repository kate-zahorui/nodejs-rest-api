const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const removedContact = await Contact.findByIdAndRemove(id);
  if (!removedContact) {
    throw RequestError(404, "Not found");
  }
  res.json(removedContact);
};

module.exports = removeById;
