part of 'comment_item_disc_bloc.dart';

class CommentItemDiscState extends Equatable {
  @override
  // TODO: implement props
  List<Object?> get props => [];
}

class CommentItemDiscInitState extends CommentItemDiscState {}

class CommentItemDiscLoadingState extends CommentItemDiscState {}

class CommentItemDiscFetchedState extends CommentItemDiscState {
  // final CommentItemDiscModel vendorlist;

  // CommentItemDiscFetchedState(this.vendorlist);
  // @override
  // List<Object> get props => [vendorlist];
}

class CommentItemDiscErrorState extends CommentItemDiscState {
  final String message;
  CommentItemDiscErrorState({required this.message});
}
