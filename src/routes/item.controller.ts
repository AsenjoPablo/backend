import { RequestHandler } from 'express';
import Item from './item';

// CRUD SETUP

// create
export const createItem: RequestHandler = async (req, res) =>
{
    // check for match in database
    const itemFound = await Item.findOne({ attribute: req.body.attribute });
    if (itemFound)
        return res.status(301).json({message: 'Item already exists'})

    const item = new Item(req.body);
    const savedItem = await item.save();
    res.json(savedItem)
}

// read
export const getItems: RequestHandler = async (req, res) =>
{
    try {
        const items = await Item.find();
        return res.json(items);
    } catch (error) {
        res.json(error)
    }
}

export const getItem: RequestHandler = async (req, res) => {
    try {
        //Item.findOne({ attribute: req.body.attribute})
        const itemFound = await Item.findById(req.params.id);
        if (!itemFound)
                return res.status(204).json({message: 'Item not found'})
        res.json(itemFound)
    } catch (error) {
        res.json(error)
    }
}

// update
export const updateItem: RequestHandler = async (req, res) => {
    try
    {
        // {new: true} forces an update on the response object
        const itemUpdated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!itemUpdated)
                return res.status(204).json({message: 'Item not found'})
        res.json(itemUpdated)
    } catch (error) {
        res.json(error)
    }}

// delete
export const deleteItem: RequestHandler = async (req, res) => {
    try {
        const itemFound = await Item.findByIdAndDelete(req.params.id);
        if (!itemFound)
                return res.status(204).json({message: 'Item not found'})
        res.json(itemFound)
    } catch (error) {
        res.json(error)
    }
}