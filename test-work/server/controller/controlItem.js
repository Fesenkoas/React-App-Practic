import Item from "../models/modelItem.js";

//Put data
export const post = async (req, res) => {
  try {
    const { data, title, quantity,distance } = req.body;
    const newItem = new Item({
        data,
        title,
        quantity,
        distance
    });
    
    await newItem.save();
    res.json({newItem, message: "ALL FINE!" });
  } catch (error) {
    res.json({ message: "ERROR CREATE TABLE" });
    console.log(error);
  }
};
//Get data
export const get = async (req, res) => {
    try{
    const items = await Item.find()
    if(!items){ return res.json({ message: "EMPTY" });}
    res.json(items)
  } catch (error) {
    console.log(error);
  }
};
