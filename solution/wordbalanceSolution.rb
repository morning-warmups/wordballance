## Finds balance point of string
# The ASCII value of the string is subtracted by 64 b/c the
# int value of 'A' is 65 increases consecutively by  one until
# 90 for 'z'

def balance(letters)
    letters = letters.split("")
    letters.each_index do |i|
        left = 0;
        (0..i-1).each {|j| left += (j-i)*(letters[j].ord-64)}


        right = 0;
        (i+1..letters.length-1).each {|j| right += (j-i)*(letters[j].ord-64)}

        return letters[0..i-1].join, letters[i], letters[i+1..letters.length-1].join, right if left + right == 0
    end
    return "DOES NOT BALANCE"
end

p balance('CONSUBSTANTIATION')
p balance('WRONGHEADED')
p balance('UNINTELLIGIBILITY')
p balance('SUPERGLUE')
