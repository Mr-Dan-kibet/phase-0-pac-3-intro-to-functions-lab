function shout(string) {
  return string;
}
"Hello!".toUpperCase(); // 'HELLO!'
function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string;
}
"HELLO".toLowerCase();
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  return string;
}
"hello".toUpperCase();
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  return string;
}
"hello".toLowerCase();
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  return string;
}
"hello" === "hello".toLowerCase(); // true
"HELLO" === "HELLO".toUpperCase(); // true
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
