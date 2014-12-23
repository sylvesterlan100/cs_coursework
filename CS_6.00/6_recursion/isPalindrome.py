#Recursively determine if a string is a palindrome

def isPalindrome(str):
	if(len(str)<=1):
		return True
	else:
		if(str[0]==str[-1]):
			return True and isPalindrome(str[1:-1])
		else:
			return False
