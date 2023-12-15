"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6543],{614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),s=t(6340);const o={},i="Day 15: Lens Library",r={unversionedId:"2023/puzzles/day15",id:"2023/puzzles/day15",title:"Day 15: Lens Library",description:"Puzzle description",source:"@site/target/mdoc/2023/puzzles/day15.md",sourceDirName:"2023/puzzles",slug:"/2023/puzzles/day15",permalink:"/scala-advent-of-code/2023/puzzles/day15",draft:!1,editUrl:"https://github.com/scalacenter/scala-advent-of-code/edit/website/docs/2023/puzzles/day15.md",tags:[],version:"current",frontMatter:{},sidebar:"adventOfCodeSidebar",previous:{title:"Day 14: Parabolic Reflector Dish",permalink:"/scala-advent-of-code/2023/puzzles/day14"},next:{title:"Day 1: Calorie Counting",permalink:"/scala-advent-of-code/2022/puzzles/day01"}},d={},p=[{value:"Puzzle description",id:"puzzle-description",level:2},{value:"Solution Summary",id:"solution-summary",level:2},{value:"Part 1",id:"part-1",level:3},{value:"Part 2",id:"part-2",level:3},{value:"Final Code",id:"final-code",level:2},{value:"Run it in the browser",id:"run-it-in-the-browser",level:3},{value:"Part 1",id:"part-1-1",level:4},{value:"Part 2",id:"part-2-1",level:4},{value:"Solutions from the community",id:"solutions-from-the-community",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"day-15-lens-library"},"Day 15: Lens Library"),(0,l.kt)("h2",{id:"puzzle-description"},"Puzzle description"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://adventofcode.com/2023/day/15"},"https://adventofcode.com/2023/day/15")),(0,l.kt)("h2",{id:"solution-summary"},"Solution Summary"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Parse the input into a list of sequences."),(0,l.kt)("li",{parentName:"ol"},"Implement the ",(0,l.kt)("inlineCode",{parentName:"li"},"HASH")," function."),(0,l.kt)("li",{parentName:"ol"},"Follow the given algorithm almost 1 for 1.")),(0,l.kt)("h3",{id:"part-1"},"Part 1"),(0,l.kt)("p",null,"For Part 1, we are asked to implement a string hashing called ",(0,l.kt)("inlineCode",{parentName:"p"},"HASH"),".\nWhile it is specified in a very imperative way, it lends itself to a straightforward fold in a functional style:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"/** The `HASH` function. */\ndef hash(sequence: String): Int =\n  sequence.foldLeft(0) { (prev, c) =>\n    ((prev + c.toInt) * 17) % 256\n  }\nend hash\n")),(0,l.kt)("p",null,"We also have to parse the input into comma-separated sequences.\nWe are told to ignore newline characters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"/** Parses the input into a list of sequences. */\ndef inputToSequences(input: String): List[String] =\n  input.filter(_ != '\\n').split(',').toList\n")),(0,l.kt)("p",null,"Now we wire things together and we are done:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def part1(input: String): String =\n  val sequences = inputToSequences(input)\n  val result = sequences.map(hash(_)).sum\n  println(result)\n  result.toString()\nend part1\n")),(0,l.kt)("h3",{id:"part-2"},"Part 2"),(0,l.kt)("p",null,"Part 2 is the real stuff.\nThe first part was basically unit-testing our ",(0,l.kt)("inlineCode",{parentName:"p"},"HASH")," function.\nFor Part 2, we asked to implement what amounts to ",(0,l.kt)("inlineCode",{parentName:"p"},"put")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"remove")," on a hash table."),(0,l.kt)("p",null,"First, we define the ",(0,l.kt)("inlineCode",{parentName:"p"},"LabeledLens")," class to hold a lens with a label and a focal length.\nWe then define our ",(0,l.kt)("inlineCode",{parentName:"p"},"boxes")," as an array of 256 lists of ",(0,l.kt)("inlineCode",{parentName:"p"},"LabeledLens"),"es:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"/** A labeled lens, as found in the boxes. */\nfinal case class LabeledLens(label: String, focalLength: Int)\n\nval boxes = Array.fill[List[LabeledLens]](256)(Nil)\n")),(0,l.kt)("p",null,"We then implement the logical operations ",(0,l.kt)("inlineCode",{parentName:"p"},"removeLens")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"addLens"),", corresponding to the ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," steps."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// Remove the lens with the given label from the box it belongs to\ndef removeLens(label: String): Unit =\n  val boxIndex = hash(label)\n  boxes(boxIndex) = boxes(boxIndex).filter(_.label != label)\n\n// Add a lens in the contents of a box; replace an existing label or add to the end\ndef addLensToList(lens: LabeledLens, list: List[LabeledLens]): List[LabeledLens] =\n  list match\n    case Nil                                => lens :: Nil // add to the end\n    case LabeledLens(lens.label, _) :: tail => lens :: tail // replace\n    case head :: tail                       => head :: addLensToList(lens, tail) // keep looking\n\n// Add a lens with the given label and focal length into the box it belongs to, in the right place\ndef addLens(label: String, focalLength: Int): Unit =\n  val lens = LabeledLens(label, focalLength)\n  val boxIndex = hash(label)\n  boxes(boxIndex) = addLensToList(lens, boxes(boxIndex))\n")),(0,l.kt)("p",null,"Finally, we use our trust ",(0,l.kt)("inlineCode",{parentName:"p"},"s"),' extractor to parse and "execute" each step of the initialization sequence:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'// Parse and execute the steps\nfor step <- steps do\n  step match\n    case s"$label-"             => removeLens(label)\n    case s"$label=$focalLength" => addLens(label, focalLength.toInt)\n')),(0,l.kt)("p",null,"To prove to our hash table follows the correct algorithm, we are asked to compute the ",(0,l.kt)("em",{parentName:"p"},"focusing power")," of our boxes.\nHere again, we follow the definition of the problem 1 to 1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// Focusing power of a lens in a given box and at a certain position within that box\ndef focusingPower(boxIndex: Int, lensIndex: Int, lens: LabeledLens): Int =\n  (boxIndex + 1) * (lensIndex + 1) * lens.focalLength\n\n// Focusing power of all the lenses\nval focusingPowers =\n  for\n    (box, boxIndex) <- boxes.zipWithIndex\n    (lens, lensIndex) <- box.zipWithIndex\n  yield\n    focusingPower(boxIndex, lensIndex, lens)\n\n// Sum it up\nval result = focusingPowers.sum\n")),(0,l.kt)("h2",{id:"final-code"},"Final Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"/** The `HASH` function. */\ndef hash(sequence: String): Int =\n  sequence.foldLeft(0) { (prev, c) =>\n    ((prev + c.toInt) * 17) % 256\n  }\nend hash\n\n/** Parses the input into a list of sequences. */\ndef inputToSequences(input: String): List[String] =\n  input.filter(_ != '\\n').split(',').toList\n\ndef part1(input: String): String =\n  val sequences = inputToSequences(input)\n  val result = sequences.map(hash(_)).sum\n  println(result)\n  result.toString()\nend part1\n\n/** A labeled lens, as found in the boxes. */\nfinal case class LabeledLens(label: String, focalLength: Int)\n\ndef part2(input: String): String =\n  val steps = inputToSequences(input)\n\n  val boxes = Array.fill[List[LabeledLens]](256)(Nil)\n\n  // --- Processing all the steps --------------------\n\n  // Remove the lens with the given label from the box it belongs to\n  def removeLens(label: String): Unit =\n    val boxIndex = hash(label)\n    boxes(boxIndex) = boxes(boxIndex).filter(_.label != label)\n\n  // Add a lens in the contents of a box; replace an existing label or add to the end\n  def addLensToList(lens: LabeledLens, list: List[LabeledLens]): List[LabeledLens] =\n    list match\n      case Nil                                => lens :: Nil // add to the end\n      case LabeledLens(lens.label, _) :: tail => lens :: tail // replace\n      case head :: tail                       => head :: addLensToList(lens, tail) // keep looking\n\n  // Add a lens with the given label and focal length into the box it belongs to, in the right place\n  def addLens(label: String, focalLength: Int): Unit =\n    val lens = LabeledLens(label, focalLength)\n    val boxIndex = hash(label)\n    boxes(boxIndex) = addLensToList(lens, boxes(boxIndex))\n\n  // Parse and execute the steps\n  for step <- steps do\n    step match\n      case s\"$label-\"             => removeLens(label)\n      case s\"$label=$focalLength\" => addLens(label, focalLength.toInt)\n\n  // --- Computing the focusing power --------------------\n\n  // Focusing power of a lens in a given box and at a certain position within that box\n  def focusingPower(boxIndex: Int, lensIndex: Int, lens: LabeledLens): Int =\n    (boxIndex + 1) * (lensIndex + 1) * lens.focalLength\n\n  // Focusing power of all the lenses\n  val focusingPowers =\n    for\n      (box, boxIndex) <- boxes.zipWithIndex\n      (lens, lensIndex) <- box.zipWithIndex\n    yield\n      focusingPower(boxIndex, lensIndex, lens)\n\n  // Sum it up\n  val result = focusingPowers.sum\n  result.toString()\nend part2\n")),(0,l.kt)("h3",{id:"run-it-in-the-browser"},"Run it in the browser"),(0,l.kt)("h4",{id:"part-1-1"},"Part 1"),(0,l.kt)(s.Z,{puzzle:"day15-part1",year:"2023",mdxType:"Solver"}),(0,l.kt)("h4",{id:"part-2-1"},"Part 2"),(0,l.kt)(s.Z,{puzzle:"day15-part2",year:"2023",mdxType:"Solver"}),(0,l.kt)("h2",{id:"solutions-from-the-community"},"Solutions from the community"),(0,l.kt)("p",null,"Share your solution to the Scala community by editing this page.\nYou can even write the whole article! ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-advent-of-code/discussions/424"},"See here for the expected format")))}c.isMDXComponent=!0}}]);