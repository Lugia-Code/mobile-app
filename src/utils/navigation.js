export function goBack(navigation) {
  if (navigation.canGoBack()) {
    navigation.goBack();
  }
}

export function logOut(navigation) {
  navigation.reset({
    index: 0,
    routes: [{ name: "Login" }],
  });
}

export function logIn(navigation) {
  navigation.replace("Tabs");
}

export function Stack(navigation) {
  navigation.push("CriarConta");
}
