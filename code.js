function e(n)
{
    // 0! / 1 == 1, so eSum starts at 1, as n == 0 is minimum.
    var eSum = 1;
    // 0! is 1.
    var factorials = [1];

    // Using 0! == 1, we fill factorials up to n, so we aren't recomputing
    // factorials repeatedly. i starts at 1, 1 * 1 = 1, then add 1 / i ! to
    // eSum.
    for(var i = 1; i <= n; i++)
    {
        factorials[i] = i * factorials[i - 1];
        eSum += (1 / factorials[i]);
    }

    return eSum;
}

console.log(JSON.stringify(e(100)));