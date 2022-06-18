part of 'home_bloc.dart';

class HomeState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class HomeInitState extends HomeState {}

class HomeLoadingState extends HomeState {}

class HomeFetchedState extends HomeState {
  // final HomeModel homelist;

  // HomeFetchedState(this.homelist);
  // @override
  // List<Object> get props => [homelist];
}

class HomeErrorState extends HomeState {
  final String message;
  HomeErrorState({required this.message});
}
