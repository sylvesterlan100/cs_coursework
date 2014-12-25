#Recursively find nth term of the fibonaci sequence

def fibonaci(nth):
    if(nth==1 or nth==0):
        return nth
    else:
        return fibonaci(nth-1)+fibonaci(nth-2)
