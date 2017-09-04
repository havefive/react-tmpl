/**
 * Created by lizhaocai on 2017/3/29.
 */
import Router from 'next/router'

const handler = () => Router.push({
    pathname: '/pwd',
    query: { name: 'Zeit' }
})

export default () => (
    <div>
    <style>{`.href-a{color:blue}`}</style>
    <div>Click <span className="href-a" onClick={handler}>here</span> to read more</div>
    </div>
)