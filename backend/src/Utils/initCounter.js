const Counter = require("../models/counter.model")

async function initCounter() {
  try {
    const counter = await Counter.findById('url_counter');

    if (!counter) {
      const newCounter = new Counter({ _id: 'url_counter' });
      await newCounter.save();
    }
  } catch (err) {
    console.error('Counter init error:', err);
  }
}

module.exports = initCounter;