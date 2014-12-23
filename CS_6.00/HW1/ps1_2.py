balance=float(raw_input('What is the outstanding balance on the credit card: '))
annual_interest=float(raw_input("What is the annual interest rate (decimal):"))
monthly_interest_rate=annual_interest/12.0

monthly_payment = 0
test_balance = balance
while(test_balance>0):
    num_month=1
    test_balance = balance
    monthly_payment+=10
    while(num_month<=12 and test_balance>0):
        test_balance=test_balance*(1+monthly_interest_rate)-monthly_payment
        num_month+=1


print "RESULT"
print "Monthly pyamnet to pay off debt in 1 year: $", monthly_payment
print 'Number of months needed: ', num_month
print 'Balance: $', round(test_balance, 2)
        
