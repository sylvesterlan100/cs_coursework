#Instructions to solve a tower of hanoi problem
#       num-discs: number of discs
#       f: the tower the stack originally starts on
#       t: the tower the stacks should end up on
#       s: the spare tower

def hanoi(num_discs, f, t, s):
	if(num_discs==1):
		print 'Move ', f, 'to ', t
	else:
		hanoi(num_discs-1, f, s, t)
		hanoi(1, f, t, s)
		hanoi(num_discs-1, s, t, f)
