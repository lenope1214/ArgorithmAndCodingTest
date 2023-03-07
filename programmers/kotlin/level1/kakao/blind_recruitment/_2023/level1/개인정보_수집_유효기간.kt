package level1.kakao.blind_recruitment._2023.level1

import java.time.LocalDate

class _2023_KAKAO_BLIND_RECRUITMENT_개인정보_수집_유효기간 {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            val solutionA = Solution()
            val resultA: IntArray = solutionA.solution(
                today = "2022.05.19",
                terms = arrayOf("A 6", "B 12", "C 3"),
                privacies = arrayOf("2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C")
            )
            println(resultA.toString2())
            println(resultA.contentEquals(intArrayOf(1, 3)))
            val resultB: IntArray = solutionA.solution(
                today = "2020.01.01",
                terms = arrayOf("Z 3", "D 5"),
                privacies = arrayOf("2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z")
            )
            println(resultB.contentEquals(intArrayOf(1, 4, 5)))
            println(resultB.toString2())
        }
    }
}

class Solution {
    fun solution(today: String, terms: Array<String>, privacies: Array<String>): IntArray {
        var answer: IntArray = intArrayOf()
        val todayDateTime = LocalDate.parse(today.replace(".", "-"))
        val termMap: Map<String, Int> = terms.toMap()

        println("===== todayDateTime = ${todayDateTime}")
        privacies.mapIndexed { index, it ->
            println("===== index = ${index}, it = ${it} ======")
            val (date, term) = it.split(" ")
            val termDate = LocalDate.parse(date.replace(".", "-")).plusMonths(termMap[term]!!.toLong())
            println("===== termDate = ${termDate}")
            if (todayDateTime >= termDate) {
                answer = answer.plus(index + 1)
            }
        }

        return answer
    }
}


fun Array<String>.toMap(): Map<String, Int> {
    return this.map { it.split(" ") }.map { it[0] to it[1].toInt() }.toMap()
}

fun IntArray.toString2(): String {
    return this.joinToString(", ")
}