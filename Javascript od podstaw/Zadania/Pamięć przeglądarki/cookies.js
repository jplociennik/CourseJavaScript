function setCookie(name, value, expirationHours)
{
    const date = new Date();
    date.setHours(date.getHours() + expirationHours);
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function getCookie(name)
{
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${name}=`))
        ?.split('=')[1];
    
      return cookieValue ? decodeURIComponent(cookieValue) : '';
}

function deleteCookie(name)
{
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC`;
}