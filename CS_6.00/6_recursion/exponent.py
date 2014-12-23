#Find a number to an exponent recursively

def toPower(num, exp):
    if (exp==0):
        return 1
    else:
        return num*toPower(num, exp-1)
