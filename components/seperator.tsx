export default function Seperator({ left, right }: {left: string, right: string }) {
    return (
        <div className="mt-20 mb-3">
            <div className="flex justify-between uppercase text-xs">
                <div>{ left }</div>
                <div>{ right }</div>
            </div>
            <hr />
        </div>
    )
}