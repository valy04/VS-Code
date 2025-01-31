import random

words = {
    "three_letters": ["PIX", "APA", "CAL", "CER", "LAC"],
    "four_letters": ["MERE", "PERE", "VAPE", "CEAS", "CANA"],
    "five_letters": ["CRUCE", "FLORI", "NISIP", "VIATA", "SOARE"],
}

score = 0
guesses = 0

print("-------- GHICESTE CUVANTUL JOC --------")
is_running = True

while is_running:
    options = int(input("Cu cate litere vrei sa joci? (3, 4, 5): "))
    
    if options not in [3, 4, 5]:
        print("Opțiunea trebuie să fie 3, 4 sau 5!")
        continue
    
    if options == 3:
        word = random.choice(words["three_letters"])
    elif options == 4:
        word = random.choice(words["four_letters"])
    elif options == 5:
        word = random.choice(words["five_letters"])
    
    # Jocul propriu-zis
    while True:
        guess = input("Ghiceste cuvantul: ").strip().upper()
        
        if len(guess) != options:
            print(f"Trebuie să conțină exact {options} litere!")
            continue
        
        if guess == word:
            print("Felicitări, ai ghicit cuvântul!")
            score += 1
            guesses += 1
            print(f"Scorul tau este: {score}")
            print(f"Ai ghicit dupa {guesses} incercari")
            break
        else:
            print("Mai încearcă o dată!")
            guesses += 1
    
    play_again = input("Vrei să joci iar? (da/nu): ").strip().lower()
    if play_again == "da":
        guesses = 0
        continue
    elif play_again == "nu":
        print("Joc închis!")
        print(f"Scor final: {score}")
        is_running = False
    else:
        while play_again not in ["da", "nu"]:
            print("Răspuns invalid!")
            play_again = input("Vrei să joci iar? (da/nu): ").strip().lower()
