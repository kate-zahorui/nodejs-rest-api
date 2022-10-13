const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw RequestError(404, "Not found");
  }
  res.json(updatedContact);
};

module.exports = updateStatusContact;
