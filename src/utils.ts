export function persistInLocalStorage(key: string, data: any) {
  const stringifiedData = JSON.stringify(data, null, 2);
  localStorage.setItem(key, stringifiedData);
}

export function retrieveFromLocalStorage(key: string): any {
  let data;
  if (key) {
    data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
  throw new Error(`${key} is ${data}`);
}
