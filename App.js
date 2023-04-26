import "./styles.css";

export default function App() {
  const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
  const k = 2;
  const longest_consec = (strArr, k) => {
    const arrayLength = strArr.length; // get length of array
    if (arrayLength === 0 || k > arrayLength || k <= 0) {
      return "";
    }
    //get ["treefoling", "folingtrashy", "trashyblue", "blueabcdef", "abcdefuvwxyz"] list
    const consecutiveArrayList = getConsecutiveArrayList(
      strArr,
      k,
      arrayLength
    );
    return getFirstLongestString(consecutiveArrayList);
  };
  const getConsecutiveArrayList = (strArr, k, arrayLength) => {
    const numberOfConsecectiveStrings = arrayLength - k;
    const consecutiveArrayList = [];
    let eachConsectiveStr;
    for (let i = 0; i <= numberOfConsecectiveStrings; i++) {
      eachConsectiveStr = "";
      for (let s = i; s < i + k; s++) {
        eachConsectiveStr += strArr[s];
      }
      consecutiveArrayList.push(eachConsectiveStr);
    }
    console.log("consecutiveArrayList", consecutiveArrayList);
    return consecutiveArrayList;
  };

  const getFirstLongestString = (strArr) => {
    let firstlongestString = "";
    let longestLength = 0;
    for (let str of strArr) {
      let strLength = str.length; //length of the string
      if (strLength > longestLength) {
        firstlongestString = str;
        longestLength = strLength;
      }
    }
    console.log("First longest String => ", firstlongestString);
    return firstlongestString;
  };
  longest_consec(strarr, k);
  longest_consec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  );

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
