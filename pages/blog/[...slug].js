import {useRouter} from 'next/router'

function BlogPostsPage(){

    const router = useRouter();

    console.log(router.query);
    // http://localhost:3000/blog/2022/22
// slug: (2) ['2022', '22']


    return (
    <div>
        <h1>BlogPostsPage</h1>
    </div>
    );
}

export default BlogPostsPage