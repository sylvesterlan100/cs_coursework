
balance=float(raw_input("What is the outstanding balance on the credit card: "))
annual_rate= float(raw_input("What is the annual interest rate (decimal): "))
min_monthly_rate = float(raw_input("What is the minimum monthly payment rate (decimal): "))
total_pay=0.0

for month in range(1, 13):
    print 'Month: ', month
    monthly_pay=round(balance*min_monthly_rate, 2)
    total_pay+=monthly_pay
    print 'Minimum monnthly payment: $',monthly_pay
    principle_pay=round(monthly_pay-(annual_rate*balance)/12, 2)
    print 'Principle paid: $', principle_pay
    balance-=round(principle_pay, 2)
    print 'Remaining balance: $', balance

print 'RESULT'
print 'Total amount paid: $', total_pay
print 'Remaining balance: $', balance
    
