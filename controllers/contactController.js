// @decs Get all contacts
// @route GET /api/contact
// @acess public
const getContacts = async (req, res) => {
  res.status(200).json({ message: `Get all contacts` });
};

// @decs create all contacts
// @route POST /api/contact
// @acess public
const creatContact = async (req, res) => {
  console.log("this is information", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("Hello ji aise ho saare");
  }
  res.status(201).json({ message: "Create contact" });
};

// @decs Get contacts
// @route GET /api/contact/:id
// @acess public
const getContact = async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

// @decs update contacts
// @route PUT /api/contact/:id
// @acess public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `update contacts for ${req.params.id}` });
};

// @decs delete contacts
// @route DELETE /api/contact/:id
// @acess public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  creatContact,
  getContact,
  updateContact,
  deleteContact,
};
