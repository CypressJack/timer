const listOfTimes = process.argv.slice(2);

if (listOfTimes.length === 0) {
  return;
} else {
for (const time of listOfTimes) {
  if (time > 0 && !isNaN(time)) {
  setTimeout(()=> {console.log('beep')}, time * 1000)
    }
  };
}  