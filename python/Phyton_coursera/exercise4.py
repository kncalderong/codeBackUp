def computepay(h,r):
    if h <= 40 :
        pay = r * h
    else :
        sob = h - 40
        pay = (r * 40) + (sob * (r * 1.5))
    return pay

hrs = input("Enter Hours:")
h = float(hrs)
rate = input("Enter the rate:")
r = float(rate)

p = computepay(h,r)
print("Pay",p)
