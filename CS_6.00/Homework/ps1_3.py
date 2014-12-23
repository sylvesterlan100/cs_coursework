balance=float(raw_input("What is the oustanding balance: "))
annual_interest=float(raw_input("What is the annual interest rate: "))

##Determine the amount of money paid for 1 year if minimum payment


def oneYear(balance, monthly_rate, annual_interest):
    balance=balance
    annual_interest=annual_interest
    
    total_paid=0

    for count in range(1, 13):
        monthly_tot_payment=monthly_rate
        total_paid=total_paid+monthly_tot_payment
        prin_payment=monthly_tot_payment-balance*annual_interest/12
        balance=balance-prin_payment
    return balance


##Determine the minimum payment required to pay off a debt in a year

monthly_interest=annual_interest/12.0

min_bound=balance*annual_interest/12.0
max_bound=(balance*(1+annual_interest/12.0)**12.0)/12.0
prev=0

while(True):

    ave=round((min_bound+max_bound)/2, 2)
    test=ave
    if(prev==test):
        break


    if(oneYear(balance, test, annual_interest)>=0):
        min_bound=test
        
    elif(oneYear(balance, test, annual_interest)<=oneYear(balance, test-.01, annual_interest)):
        max_bound=test
        prev=test
           
    
print max_bound
