# Print the 10th line of file.txt
# If the file has fewer than 10 lines, output nothing

awk 'NR==10' file.txt

# How to Run

# 1. Make it executable:
# chmod +x TenthLine.sh

# 2. Run it with:
# ./TenthLine.sh

# Example

# Suppose file.txt contains:
# Line1
# Line2
# Line3
# Line4
# Line5
# Line6
# Line7
# Line8
# Line9
# Line10
# Line11