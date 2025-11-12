#  Random Message Generator

A simple **JavaScript application** that generates a random, fortune-style message every time it runs. Each message combines a random **sign**, **fortune**, and **piece of advice**, giving a fun, unpredictable experience with every execution.

---

##  Features

- Generates a **unique message** each run  
- Combines three randomized elements:
  -  **Sign Info** — a symbolic “sign” (e.g. *sun*, *moon*, *earth*)  
  -  **Fortune Output** — your current luck level  
  -  **Advice** — a short suggestion or action  

---

## Example Output
When you run the script, you’ll see something like:


- Your sign right now is a comet
- You are having great luck
- You should play more


Each part of the message changes randomly every time.

---

## How It Works

1. The `messageGenerator` object holds three arrays:
   - `signInfo` – contains possible signs  
   - `fortuneOutput` – contains possible luck outcomes  
   - `advice` – contains different advice statements  

2. The `randomNum()` function picks a random number between 0 and 5.  

3. The `randomMessage()` function:
   - Iterates over each property in `messageGenerator`
   - Randomly selects an element from each array
   - Builds and returns a formatted message string

4. Finally, `console.log(randomMessage());` displays the message in your terminal.

---

## How to Run

1. Clone or download this repository.  
2. Open a terminal in the project folder.  
3. Run the script using Node.js:

   ```bash
   node messageGenerator.js
   
*(Assuming your file is named messageGenerator.js)*

See your random message printed in the console 🎉

## Technologies Used

- **JavaScript (ES6)**

- **Node.js** for execution

---

## Customization

*You can easily modify or expand the message pool:*

  ```js
  const messageGenerator = {
  signInfo: ['star', 'moon', 'sun', 'comet', 'water', 'earth', 'fire'],
  fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck', 'amazing luck'],
  advice: ['smile more', 'take a walk', 'call a friend', 'trust your gut', 'learn something new']
  };
```
Adding or removing elements in these arrays will instantly change the kinds of messages produced.

---

## 📜 License

This project is licensed under the **MIT License** — free for personal and commercial use.
