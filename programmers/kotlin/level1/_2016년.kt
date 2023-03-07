import java.time.LocalDate
class Solution {
    fun solution(a: Int, b: Int): String {
        return LocalDate.of(2016, a, b).dayOfWeek.toString().substring(0,3)
    }

}

fun main(){
    val solution = Solution()
    val result = solution.solution(5, 24)
    println("result: collect? ${result} ${result=="TUE"}")

}