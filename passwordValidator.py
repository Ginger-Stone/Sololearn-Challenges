import re

special_count=0 
digit_count=0
count=0

print ("Enter Password")
password=input("")

pswd_length=len(password)
check_length=bool(pswd_length>=5 and pswd_length<=10)

for char in list(password):
    check_digit=char.isdigit()
    if check_digit==True:
        digit_count+=1

special = re.compile('[@_!#$%^&*()<>?/\|}{~:]')
for char in list(password):
    if special.search(password)!= None:
        special_count+=1;  

def validation():
    """Validates the password entered"""
    if (check_length==True and digit_count>=1 and special_count>=1):
        print("\n===========================")
        print("Awesome! Password Set")
        print("===========================")
    else:
        print("\n=========================================")
        print("Invalid Password! Check on the following:")
        print("===========================================")
        if check_length==False:
            print("Password length should range from 5-10")
        if digit_count==0:
            print("Password should contain a digit (1 - 9)")
        if special_count==0:
            print("Password should contain special character(s) (!@#$%^&*_)")
    
validation() 