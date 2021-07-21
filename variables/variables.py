pi = 3.14

texto = 'lorem ipsum'

futbol = False

# Global Scope
x = 20

# Local Scope
def myFunc():
  x = 30
  print(x)

print(x) # 20
myfunc() # 30
