<?php
/**
 * Simple Visitor Counter
 * -----------------------
 * Stores the visit count in a text file (count.txt) in the same folder.
 * Works on InfinityFree and any standard PHP hosting.
 */

$counterFile = __DIR__ . '/count.txt';

// Create the file with 0 if it doesn't exist yet
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, "0");
}

// Read current count
$count = (int) file_get_contents($counterFile);

// Increase by 1
$count++;

// Save new count back to file
file_put_contents($counterFile, $count);

// Output the count (this is what you'll embed on your page)
echo $count;
?>
