export type HomeStackParamList = {
  Home: undefined;
  Details: {
    body: string,
    title: string
  };
};

// //export generic so we don't have to keep typing all the props
// export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
//   navigation: StackNavigationProp<HomeStackParamList, T>;
//   route: RouteProp<HomeStackParamList, T>;
// };