import os

def normalize_path(path):
    """
    Removes leading and trailing quotes from the input path if they exist and returns the normalized path.
    """
    return path.strip().strip('"').strip("'")

def delete_files_from_list(folder_path, files_list):
    """
    Deletes all files listed in the files_list from the specified folder.
    """
    with open(files_list, "r") as f:
        lines = f.readlines()

    # Filter out any lines that don't contain actual file paths
    files_to_delete = [line.strip() for line in lines if line.strip() and not line.startswith("Files to delete")]

    # Count the number of deleted files
    deleted_count = 0

    for file_path in files_to_delete:
        full_path = os.path.join(folder_path, file_path)
        if os.path.exists(full_path):
            try:
                os.remove(full_path)
                print(f"Deleted: {full_path}")
                deleted_count += 1
            except OSError as e:
                print(f"Error deleting {full_path}: {e}")
        else:
            print(f"File not found (already deleted?): {full_path}")

    print(f"\nTotal files deleted: {deleted_count}")

if __name__ == "__main__":
    # Get user input for the folder path and files list
    folder_path = input("Enter the path to the folder where files should be deleted: ").strip()
    files_list_path = input("Enter the path to the files_to_delete.txt file: ").strip()

    # Normalize the paths to remove extra quotes
    folder_path = normalize_path(folder_path)
    files_list_path = normalize_path(files_list_path)

    # Call the function to delete the files
    delete_files_from_list(folder_path, files_list_path)
