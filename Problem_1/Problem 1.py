def virusIndices(p, v):
    def is_match(s1, s2):
        mismatch_count = 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                mismatch_count += 1
                if mismatch_count > 1:
                    return False
        return True

    matching_indices = []
    for i in range(len(p) - len(v) + 1):
        substring = p[i:i + len(v)]
        if is_match(substring, v):
            matching_indices.append(i)
    if matching_indices:
        print(*matching_indices)
    else:
        print("No Match!")

# Example usage
if __name__ == "__main__":
    num_test_cases = int(input())
    for _ in range(num_test_cases):
        patient_dna, virus_dna = input().split()
        virusIndices(patient_dna, virus_dna)
