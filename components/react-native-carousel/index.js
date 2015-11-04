'use strict';

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
    AppRegistry,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    View
    } = React;


var PAGE_CHANGE_DELAY = 4000;

/**
 * Animates pages in cycle
 * (loop possible if children count > 1)
 */
var Carousel = React.createClass({
    propTypes: {
        children: React.PropTypes.node.isRequired,
        delay: React.PropTypes.number,
        style: View.propTypes.style,
        pageStyle: View.propTypes.style,
        contentContainerStyle: View.propTypes.style,
        autoplay: React.PropTypes.bool
    },
    mixins: [TimerMixin],
    getDefaultProps: function () {
        return {
            delay: PAGE_CHANGE_DELAY,
            autoplay: true
        };
    },
    getInitialState: function () {
        if (!!this.props.children) {
            var childrenCount = this.props.children.length;
            return {
                contentOffset: {x: 0, y: 0},
                currentPage: childrenCount > 1 ? 1 : 0,
                hasChildren: true,
                size: {width: 0, height: 0}
            };
        } else {
            return {
                hasChildren: false,
                size: {width: 0, height: 0}
            }
        }
    },
    componentDidMount: function () {
        if (this.state.hasChildren) {
            this._setUpTimer();
        }
    },
    _onScrollBegin: function (event) {
        this.clearTimeout(this.timer);
    },
    _onScrollEnd: function (event) {
        this._setUpTimer();

        var offset = Object.assign({}, event.nativeEvent.contentOffset);

        var childrenCount = this.props.children.length,
            size = this.state.size;
        if (offset.x === 0) {
            offset.x = childrenCount * size.width;
        } else if (offset.x == (childrenCount + 1) * size.width) {
            offset.x = size.width;
        }

        this._calculateCurrentPage(offset.x);
        this.setState({contentOffset: offset});
    },
    _onLayout: function () {
        let self = this;
        this.refs.container.measure(function (x, y, w, h, px, py) {
            self.setState({
                contentOffset: {x: w},
                size: {width: w, height: h}
            });
        });
    },
    _setUpTimer: function () {
        //only for cycling
        if (this.props.autoplay && this.props.children.length > 1) {
            this.clearTimeout(this.timer);
            this.timer = this.setTimeout(this._animateNextPage, this.props.delay);
        }
    },
    _animateNextPage: function () {
        var k = this.state.currentPage;
        var size = this.state.size;
        k++;
        if( k == this.props.children.length ){
            k = 0;
        }

        this.setState({currentPage: k});
        this.refs.scrollView.scrollTo(0, k * size.width);
        this._setUpTimer();
    },
    _calculateCurrentPage: function (offset) {
        var size = this.state.size;
        var page = Math.floor((offset - size.width / 2) / size.width) + 1;
        this.setState({currentPage: page});
    },
    //TODO: add optional `dots` for displaying current page (like pageControl)
    render: function () {
        var pages = [],
            contents,
            containerProps;

        var size = this.state.size;

        containerProps = {
            ref: 'container',
            onLayout: this._onLayout,
            style: [this.props.style]
        };

        if (!this.state.hasChildren) {
            contents = (
                <Text style={{backgroundColor: 'white'}}>
                    You are supposed to add children inside Carousel
                </Text>
            );
        }

        var children = this.props.children;

        //to make infinite pages structure like this is needed: 3-1-2-3-1
        //add last one at the 1st place
        if (children.length > 1) {
            pages.push(children[children.length - 1]);
        }

        //add all pages
        for (var i = 0; i < children.length; i++) {
            pages.push(children[i]);
        }

        //add first one at the last place
        if (children.length > 1) {
            pages.push(children[0]);
        }

        pages = pages.map((page, i) => {
            return (
                <View
                    style={[{width: size.width, height: size.height}, this.props.pageStyle]}
                    key={"page"+i}>{page}</View>
            );
        });

        contents = (
            <ScrollView
                ref='scrollView'
                onScrollBeginDrag={this._onScrollBegin}
                onMomentumScrollEnd={this._onScrollEnd}
                alwaysBounceHorizontal={false}
                alwaysBounceVertical={false}
                contentInset={{top:0}}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                pagingEnabled={true}
                bounces={false}
                contentOffset={this.state.contentOffset}
                contentContainerStyle={[
                  styles.horizontalScroll,
                  this.props.contentContainerStyle,
                  {
                    width: size.width*(this.props.children.length+(this.props.children.length>1?2:0)),
                    height: size.height
                  }
                ]}
                >
                {pages}
            </ScrollView>);
        return (
            <View {...containerProps}>
                {contents}
            </View>
        );
    },
});

var styles = StyleSheet.create({
    horizontalScroll: {
        position: 'absolute'
    }
});

module.exports = Carousel;
