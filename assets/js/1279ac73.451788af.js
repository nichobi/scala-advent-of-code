"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7111],{4562:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),o=a(6340);const l={},r="Day 25: Full of Hot Air",d={unversionedId:"2022/puzzles/day25",id:"2022/puzzles/day25",title:"Day 25: Full of Hot Air",description:"Puzzle description",source:"@site/target/mdoc/2022/puzzles/day25.md",sourceDirName:"2022/puzzles",slug:"/2022/puzzles/day25",permalink:"/scala-advent-of-code/2022/puzzles/day25",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2022/puzzles/day25.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 24: Blizzard Basin",permalink:"/scala-advent-of-code/2022/puzzles/day24"},next:{title:"Day 1: Sonar Sweep",permalink:"/scala-advent-of-code/puzzles/day1"}},s={},u=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1 (Only 1 part today)",id:"part-1-only-1-part-today",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],p={toc:u};function c(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"day-25-full-of-hot-air"},"Day 25: Full of Hot Air"),(0,i.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://adventofcode.com/2022/day/25"},"https://adventofcode.com/2022/day/25")),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): String =\n  totalSnafu(input)\n\nval digitToInt = Map(\n  '0' -> 0,\n  '1' -> 1,\n  '2' -> 2,\n  '-' -> -1,\n  '=' -> -2,\n)\nval intToDigit = digitToInt.map(_.swap)\n\ndef showSnafu(value: Long): String =\n  val reverseDigits = Iterator.unfold(value)(v =>\n    Option.when(v != 0) {\n      val mod = math.floorMod(v, 5).toInt\n      val digit = if mod > 2 then mod - 5 else mod\n      intToDigit(digit) -> (v - digit) / 5\n    }\n  )\n  if reverseDigits.isEmpty then \"0\"\n  else reverseDigits.mkString.reverse\n\ndef readSnafu(line: String): Long =\n  line.foldLeft(0L)((acc, digit) =>\n    acc * 5 + digitToInt(digit)\n  )\n\ndef totalSnafu(input: String): String =\n  showSnafu(value = input.linesIterator.map(readSnafu).sum)\n")),(0,i.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,i.kt)("h4",{id:"part-1-only-1-part-today"},"Part 1 (Only 1 part today)"),(0,i.kt)(o.Z,{puzzle:"day25-part1",year:"2022",mdxType:"Solver"}),(0,i.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/erikvanoosten/advent-of-code/blob/main/src/main/scala/nl/grons/advent/y2022/Day25.scala"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/erikvanoosten"},"Erik van Oosten")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cosminci/advent-of-code/blob/master/src/main/scala/com/github/cosminci/aoc/_2022/Day25.scala"},"Solution")," by Cosmin Ciobanu"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AvaPL/Advent-of-Code-2022/tree/main/src/main/scala/day25"},"Solution")," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AvaPL"},"Pawe\u0142 Cembaluk"))),(0,i.kt)("p",null,"Share your solution to the Scala community by editing this page. (You can even write the whole article!)"))}c.isMDXComponent=!0}}]);